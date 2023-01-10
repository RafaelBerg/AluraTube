import React from "react"
import { VideoContext } from "../Timeline"
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

export default function RegisterVideo(){
    const formCadastro = useForm({
        initialValues: {titulo: "", url: ""}})
    const [formVisible, setFormVisible] = React.useState(false)
   
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
                            placeholder="Titulo do video" 
                            name="titulo"
                            value={formCadastro.values.titulo} 
                            onChange={formCadastro.handleChange}
                            />
                        <input 
                            placeholder="URL"
                            name="url"
                            value={formCadastro.values.url} 
                            onChange={formCadastro.handleChange}/>
                        {/* console.log(formCadastro.values) */}
                        <button type="submit">
                            Cadastrar
                        </button>
                    </div>
                </form>
            )}      
        </StyledRegisterVideo>
    )
}