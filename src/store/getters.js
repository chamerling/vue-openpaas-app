export const getUserAvatarUrl = state => state.session.user && state.session.user._id && `${state.baseUrl}/api/users/${state.session.user._id}/profile/avatar`;

export const getUserName = state => state.session.user && `${state.session.user.firstname} ${state.session.user.lastname}`;

export const getUserEmail = state => state.session.user && state.session.user.preferredEmail;
