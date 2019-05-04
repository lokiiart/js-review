let localStorage = window.localStorage||"error";

export default function req(){
    localStorage.setItem("test","teststring");
    return localStorage.getItem("test");
}