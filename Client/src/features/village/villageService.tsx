import * as httpRequest from '~/utils/httpRequest';
const API_URL = '/Village/';

export const getVillage = (_id: string, accessToken: string) => {
    return httpRequest.get(API_URL + `getVillage/${_id}`, {
        headers: {
            Authorization: `Bearer ${accessToken}`
        }
    })
};
export const getAllVillage = (VillageId: string, accessToken: string) => {
    return httpRequest.get(API_URL + `getAllVillage/${VillageId}`, {
        headers: {
            Authorization: `Bearer ${accessToken}`
        }
    })
};
export const updateProfile = (VillageId: string, data: object, accessToken: string) => {
    return httpRequest.post(API_URL + `updateProfile/${VillageId}`, data, {
        headers: {
            "Authorization": `Bearer ${accessToken}`
        }
    })
}
export const deleteVillage = (VillageId: string, accessToken: string) => {
    return httpRequest.deleteOne(API_URL + `deleteVillage/${VillageId}`, {
        headers: {
            Authorization: `Bearer ${accessToken}`
        }
    })
};