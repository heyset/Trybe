class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div>{this.props.children}</div>
  }
}

const ESTADOS = [
  { name: 'Acre', acronym: 'AC',},
  { name: 'Alagoas', acronym: 'AL',},
  { name: 'Amapá', acronym: 'AP',},
  { name: 'Amazonas', acronym: 'AM',},
  { name: 'Bahia', acronym: 'BA',},
  { name: 'Ceará', acronym: 'CE',},
  { name: 'Distrito Federal', acronym: 'DF',},
  { name: 'Espírito Santo', acronym: 'ES',},
  { name: 'Goiás', acronym: 'GO',},
  { name: 'Maranhão', acronym: 'MA',},
  { name: 'Mato Grosso', acronym: 'MT',},
  { name: 'Mato Grosso do Sul', acronym: 'MS',},
  { name: 'Minas Gerais', acronym: 'MG',},
  { name: 'Pará', acronym: 'PA',},
  { name: 'Paraíba ', acronym: 'PB',},
  { name: 'Paraná', acronym: 'PR',},
  { name: 'Pernambuco', acronym: 'PE',},
  { name: 'Piauí', acronym: 'PI',},
  { name: 'Rio de Janeiro', acronym: 'RJ',},
  { name: 'Rio Grande do Norte', acronym: 'RN',},
  { name: 'Rio Grande do Sul ', acronym: 'RS',},
  { name: 'Rondônia', acronym: 'RO',},
  { name: 'Roraima', acronym: 'RR',},
  { name: 'Santa Catarina ', acronym: 'SC',},
  { name: 'São Paulo ', acronym: 'SP',},
  { name: 'Sergipe', acronym: 'SE',},
  { name: 'Tocantins', acronym: 'TO',},
]

class Input extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <input 
        name={this.props.name}
        placeholder={this.props.placeholder}
        maxLength={this.props.maxLength}
        type="text"
        value={this.props.value}
        onChange={this.props.onChange}
        type={this.props.type}
        required
      />
    );
  }
}

class StateDropdown extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <React.Fragment>
        <label htmlFor="form__estado">Estado</label>
        <select
          name="estado"
          id="form__estado" 
          value={this.props.value}
          onChange={this.props.onChange}
          required>
          {ESTADOS.map(({name, acronym}) => <option key={acronym} value={acronym}>{name}</option>)}
        </select>
      </React.Fragment>
    );
  }
}

class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      nome: '',
      email: '',
      cpf: '',
      endereco: '',
      cidade: '',
      estado: 'AC',
      tipo: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    const { name, value, maxLength } = target;

    if (maxLength > 0 && value.length >= maxLength) return;

    this.setState({[name]: value});
  }

  render() {
    return(
      <form>
        <fieldset>
          <legend>Dados Pessoais</legend>
          <Input
            name="nome"
            placeholder="Nome"
            maxLength="40"
            value={this.state.nome}
            onChange={this.handleChange}
            type="text"
          />
          <Input
            name="email"
            placeholder="Email"
            maxLength="50"
            value={this.state.email}
            onChange={this.handleChange}
            type="text"
          />
          <Input
            name="cpf"
            placeholder="CPF"
            maxLength="11"
            value={this.state.cpf}
            onChange={this.handleChange}
            type="text"
          />
          <Input
            name="endereco"
            placeholder="Endereço"
            maxLength="200"
            value={this.state.endereco}
            onChange={this.handleChange}
            type="text"
          />
          <Input
            name="cidade"
            placeholder="Cidade"
            maxLength="28"
            value={this.state.cidade}
            onChange={this.handleChange}
            type="text"
          />
          <StateDropdown
            value={this.state.estado}
            onChange={this.handleChange}
          />
          <label>
            Apartamento
            <input
              type="radio"
              name="tipo"
              value="apartamento"
              onChange={this.handleChange}
              checked={this.state.tipo === 'apartamento'}
            />
          </label>
          <label>
            Casa
            <input
              type="radio"
              name="tipo"
              value="casa"
              onChange={this.handleChange}
              checked={this.state.tipo === 'casa'}
            />
          </label>
        </fieldset>

        <fieldset>
          <legend>Último Emprego</legend>
        </fieldset>

        <input type="submit" value="Montar curriculo" />
      </form>
    );
  }
}

ReactDOM.render(
  <App>
    <Form />
  </App>,
  document.getElementById('root'),
);