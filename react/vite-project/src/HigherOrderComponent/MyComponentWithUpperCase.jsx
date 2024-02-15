//Higher Order Component (HOC) with functional component


const WithUpperCase=(WrappedComponent)=>{

    return function({text,...resProps}){

        const UpperCaseText=text.toUpperCase();
        return <WrappedComponent text={UpperCaseText}/>
    }

}

const Mycomponent=({text})=> <div>{text}</div>

//usage of HOC

const MyComponentWithUpperCase=WithUpperCase(Mycomponent);

export default MyComponentWithUpperCase;