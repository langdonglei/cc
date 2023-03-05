class List extends React.Component {
    render() {
        return (
            <div>
                {
                    this.props.data.map(item => {
                        return (
                            <div key={item.id} style={{
                                border: '1px solid red'
                            }}>
                                <label>{item.name}</label>
                                <img src={item.url}/>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}