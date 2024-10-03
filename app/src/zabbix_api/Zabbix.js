const axios = require('axios');

class Zabbix {

  constructor(opts) {
    this.url = opts.url;
    this.user = opts.user;
    this.password = opts.password;
    this.auth = null
  }

  // Metodo responsavel por se comunicar com a API do Zabbix e buscar informações conforme
  // parametros passados
  async request (method, params) {
    const response = await axios.post(this.url, {
      "jsonrpc": "2.0",
      method,
      params,
      "id": 1,
      auth: this.auth
    })
    return response.data.result
  }

  // Metodo responsavel por realizar o login e obter id de autenticação, esse id é usado para
  // realizar futuras buscas
  async login () {
    const result = await this.request('user.login', {
      user: this.user,
      password: this.password
    })
    this.auth = result
    return result
  }

  // Após executar a busca o recomendado é executar o logout 
  async logout () {
    const result = await this.request('user.logout', [])
    this.auth = null
    return result
  }
 
  // Esse metodo busca os IDs de todos os Grupos de Hosts dentro do Zabbix
  async getHostGroupId () {
    try {
      const hostgroup = await this.request('hostgroup.get', {})
      return hostgroup
    } 
    catch (error) {
      console.error(error)
    }
  }

  // Esse metodo recebe o ID do Grupo de Hosts do zabbix e busca se tem algum problema em algum host que 
  // faz parte desse mesmo grupo.
  //
  // Outro filtro que é passado é acknowledged como 0, ou seja, não retorna problemas conhecidos
  //
  // E por ultimo foi configurado que as severidades serão de media, alta e desastre
  async getProblem (groupId) {
    const problem = await this.request('problem.get', {
      groupids: groupId,
      acknowledged: 0,
      severities: [3, 4, 5],
    })
    return problem
  }

  // Metodo MAIN, acredito que esse metodo e o getProblem não deveriam ficar aqui, pois eles não trazem
  // nada novo para a class mas sim utilizam os recursos ja existentes na class. Futuramente irei encontrar
  // um local melhor para eles, por hora ficaram aqui.
  async getHostsProblems () {
    await this.login()
    const groupHosts = await this.getHostGroupId()
    const arrayGroups = []
    for (let x in groupHosts) {
      const numProblems = await this.getProblem(groupHosts[x].groupid)
      if (numProblems.length > 0){
        arrayGroups.push(groupHosts[x].name)
      }
    }
    await this.logout()
    return arrayGroups
  }
}

module.exports = Zabbix
