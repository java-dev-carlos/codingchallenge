/**
 * Created by CarlosM on 21/06/2020.
 */

export const getLaunches = () => ({
    type: 'GET_LAUNCHES',
});

export const getLaunchData = (id) => ({
    type: 'GET_LAUNCH_DATA',
    launchId: {id},
})
