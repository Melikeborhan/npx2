import { useParams } from "react-router";
import arr from "../data";
import { useEffect } from "react";

const Detail = () => {
    const { id } = useParams()

    useEffect(() => {

        arr.filter(ar => ar.id == id)

    },[])

    console.log("arr", arr);



    const redicetFunc = () => {
        window.location = "/"
    }
    return (
        <>
            <button onClick={redicetFunc}>BENİ ANASAYFAYA YÖNLENDİR!</button>

        </>
    )
}
export default Detail