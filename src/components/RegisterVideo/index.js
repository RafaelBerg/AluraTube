import React from "react"
import { VideoContext } from "../Timeline/Video"
import { StyledRegisterVideo } from "./styles"

function useForm(propsDoForm) {
    const [values, setValues] = React.useState(propsDoForm.initialValues)

    return {
        values,
        handleChange: (event) => {
            const value = event.target.value
            const {name} = event.target
            setValues({
                ...values,
                [name]: value,
            })
        },
    }
}

export default function RegisterVideo(setVideoVisible){
    const formCadastro = useForm({
        initialValues: {title: "", url: "", playlist: ""}})
    const [formVisible, setFormVisible] = React.useState(false)
    const videoContext = React.useContext(VideoContext)
   
    return (
        <StyledRegisterVideo>
            <button type="button" className="add-video" onClick={() => setFormVisible(true)}>
                +
            </button>

            {formVisible && (
                <form onClick={(event) => event.preventDefault()}>
                    <div>
                        <button className="close-modal" onClick={() => setFormVisible(false)}>
                            X
                        </button>                   
                        <input 
                            placeholder="Title" 
                            name="title"
                            value={formCadastro.values.title} 
                            onChange={formCadastro.handleChange}
                            />
                        <input 
                            placeholder="URL"
                            name="url"
                            value={formCadastro.values.url} 
                            onChange={formCadastro.handleChange}/>                         
                        <select>
                            <option value={""} disabled>Playlists</option>
                            <option value={"jogos"}>Jogos</option>
                            <option value={"front-end"}>Front-End</option>
                            <option value={"programação"}>Programação</option>
                        </select>
                        <button onClick={()=> 
                            videoContext.addVideo(
                                formCadastro.values,
                                document.querySelector("select").value, 
                                setFormVisible,
                                setVideoVisible
                                )} 
                            type="submit">
                            Cadastrar
                        </button>
                    </div>
                </form>
            )}      
        </StyledRegisterVideo>
    )
}