class Demo extends React.Component {
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
            res.results.map((item, index) => {
                item.id = index + 1;
            })
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
                <Input onChange={this.onChangeHandler}/>
                <List data={this.state.listFiltered}/>
            </div>
        )
    }

    onChangeHandler = e => {
        this.setState({
            listFiltered: this.state.list.filter(item => {
                return item.name.includes(e.target.value)
            })
        })
    }
}
