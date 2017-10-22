export const rootUrl = '/';
export const loginUrl = `${rootUrl}oauth/token`;
export const userUrl = `${rootUrl}api/user`;
export const campaignsUrl = (userId) => `${rootUrl}api/${userId}/campaigns`;