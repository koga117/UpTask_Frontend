import { isAxiosError } from "axios";
import { UpdateCurrentUserPasswordForm, UserProfileForm } from "../types";
import api from "../lib/axios";


export async function updateProfile(fromData: UserProfileForm) {
    try {
        const { data } = await api.put<string>('/auth/profile', fromData)
        return data
    } catch (error) {
        if(isAxiosError(error) && error.response) {
            throw new Error(error.response.data.error)
        }
    }
}

export async function changePassword(fromData: UpdateCurrentUserPasswordForm) {
    try {
        const { data } = await api.post<string>('/auth/update-password', fromData)
        return data
    } catch (error) {
        if(isAxiosError(error) && error.response) {
            throw new Error(error.response.data.error)
        }
    }
}