import Loader from "react-js-loader";

function BetterLoader() {
    return (
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", width: "100vw" }}>
            <Loader
                type="spinner-cub"
                bgColor="red"
                color="green"
                title={"Aguarde um momento!"}
                size={100}
            />
        </div>
    )
}

export default BetterLoader