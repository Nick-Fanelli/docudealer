type Props = {

    children: React.ReactNode
    className?: string

}

const TextDivider = (props: Props) => {

    return (
        <div id="text-divider"
            className={`text-base flex items-center before:flex-1 before:p-[1px] before:bg-divider before:mr-[15px] after:flex-1 after:p-[1px] after:bg-divider after:ml-[15px] before:ml-8 after:mr-8 ${props.className}`}
        >{props.children}</div>
    )

}

export default TextDivider;