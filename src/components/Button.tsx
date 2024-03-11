interface ButtonProps {
    children: React.ReactNode;
    className?: string;
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void

}

const Button = ( props: ButtonProps) => {
  return (
    <button onClick={ props.onClick } className= { props.className}>
        { props.children}
    </button>
  )
}

export default Button
