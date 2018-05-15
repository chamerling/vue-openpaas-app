export const getUserAvatarUrl = state => `${state.baseUrl}/api/user/profile/avatar`;

export const getUserName = state => state.session.user && `${state.session.user.firstname} ${state.session.user.lastname}`;
