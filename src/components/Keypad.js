// Code Keypad Component Here

function Keypad (){
    function press() {
        console.log("Entering password...")
    }  
    return (
        <div>
            <input type="password" onChange={press} />
        </div>
    )
}

export default Keypad;
