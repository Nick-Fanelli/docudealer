type Props = {

    className?: string
    children?: React.ReactNode

}

const IconWrapper = (props: Props) => {

    return (
        <div className={`${props.className} flex items-center rounded-small justify-center w-7 h-7`}>
            {props.children}
        </div>
    );

}

export default IconWrapper;