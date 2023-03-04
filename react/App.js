class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            list        : [],
            listFiltered: [],
        }
    }

    componentDidMount() {
        fetch('https://pokeapi.co/api/v2/pokemon').then(res => {
            return res.json()
        }).then(res => {
            this.setState({
                list        : res.results,
                listFiltered: res.results,
            })
        })
    }

    render() {
        return (
            <div>
                <h1>hhh</h1>
                <input type="text" onChange={this.onChangeHandler}/>
                <ul>
                    {
                        this.state.listFiltered.map((item, index) => {
                            return <li key={index}>{item.name}</li>
                        })
                    }
                </ul>
            </div>
        )
    }

    onChangeHandler = (e) => {
        this.setState({
            listFiltered: this.state.list.filter(item => {
                return item.name.includes(e.target.value)
            })
        })
    }
}
