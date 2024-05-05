import AppError from "../erros/AppError";

const EmailValid = (email: string) => {
    if (!email.includes('@')) {
        throw new AppError('Invalid email');
    }
}

const IsEmailNotNull = (email: string) => {
    if (!email) {
        throw new AppError('Email is required');
    }
}

export {EmailValid, IsEmailNotNull};