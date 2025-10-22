"use client"
import { InputHTMLAttributes } from "react";

export interface InputTextoProps extends InputHTMLAttributes<HTMLInputElement> {
    label: string
}

export default function InputTexto(props: InputTextoProps) {
    const { label, className, ...rest } = props
    return (
        <div className="flex flex-col gap-1">
            <label>{label}</label>
            <input
                {...rest}
                className={`bg-zinc-800 p-2 rounded-md outline-none w-full ${className ?? ''}`}
            />
        </div>
    )
}
