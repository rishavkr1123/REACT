import { useRouteError } from "react-router-dom"
function Error(){
    const err = useRouteError()

    return <div>
            Error Page
            <h3>{err.status}: {err.status}</h3>

        </div>
}
export default Error