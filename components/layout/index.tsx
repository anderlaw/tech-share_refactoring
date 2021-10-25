
interface IProps {
    children: JSX.Element
}
const _Index: React.FC<IProps> = props => {
    return <div style={{ backgroundColor: "green" }}>
        {props.children}
    </div>
}
export default _Index