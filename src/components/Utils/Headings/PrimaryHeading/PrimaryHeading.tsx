import { tPrimaryHeading } from "./PrimaryHeading.models";

export default function PrimaryHeading({heading,title,isUppercase}:tPrimaryHeading){
    if(heading === 1){
        return <h1 data-uppercase={isUppercase}>{title}</h1>
    }else if (heading === 2){
        return <h2 data-uppercase={isUppercase}>{title}</h2>
    }else if (heading === 3){
        return <h3 data-uppercase={isUppercase}>{title}</h3>
    }else if (heading === 4){
        return <h4 data-uppercase={isUppercase}>{title}</h4>
    }else if (heading === "p"){
        return <p data-uppercase={isUppercase}>{title}</p>
    }
}