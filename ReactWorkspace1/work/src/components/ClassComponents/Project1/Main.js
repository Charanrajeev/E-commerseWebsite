import {Component} from 'react';
import Form from './Form';
import Table from './Table';
import axios from 'axios';
class Main extends Component{
    constructor(props){
        super(props);
        this.state={
            list:[],
            form:{
                product:'',
                price:''
            }
        }

    }
    componentDidMount(){
      this.getDetails()
    }
    getDetails=()=>{
        axios.get('http://localhost:3000/classtable').then((response)=>{
            console.log('received response from server:',response.data)
            this.setState({
                list:[...response.data]
            })
        }).catch()
    }
    onChangeHandler=(e)=>{
        this.setState({
           form:{...this.state.form,[e.target.name]:e.target.value}
        })
    }
    onSubmitHandler=(e)=>{
        e.preventDefault()
        axios.post('http://localhost:3000/classtable',this.state.form).then((response)=>{
        console.log(response.data)
        this.getDetails()
        }).catch()
    }
    render(){
        return(
            <div>
                <Form onChangeHandler={this.onChangeHandler} onSubmitHandler={this.onSubmitHandler}/>
                <Table list={this.state.list}/>
            </div>
        )
    }
}
export default Main;