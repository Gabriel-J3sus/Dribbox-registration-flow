export interface IPagesProps {
    title: string;
}

export interface IButtonProps {
    onSubmit: () => void;
    title: string;
}

export interface IErrorProps {
    style: string;
    errorStatusTitle: string; 
}

export interface IInputProps {
    placeholder: string;
    secureTextEntry: boolean;
    value: string;
    onChangeText: (event: any) => void;
}

export interface ILinkProps {
    handleNavigate: () => void;
    title: string
}