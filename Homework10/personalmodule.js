
const os=require("os");

function UserGreetings() {
    const user=os.userInfo().username;  
    const currentTime=new Date().getHours();
    let greeting;
    if (currentTime<12) {
        greeting = "Good morning";
    } else if (currentTime>=12 && currentTime<18) {
        greeting = "Good afternoon";
    } else if (currentTime>18 && currentTime<=21) {
        greeting = "Good evening";
    } else {
        greeting = "Good night";
    }
    return `${greeting}, ${user}`;
}
module.exports={UserGreetings};