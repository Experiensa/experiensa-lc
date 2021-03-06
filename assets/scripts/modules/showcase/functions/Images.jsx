import imageUrl from '../../../../images/travel-no-image.jpg';
// const travelNoImage = experiensa_vars.dist_url + '/vendor/travel-no-image.jpg';

export function getImageURL(data) {
	if (Object.prototype.hasOwnProperty.call(data, 'cover_image')) {
		if (data.cover_image.feature_image !== false) {
			return data.cover_image.feature_image;
		}
	}
	return imageUrl;
}
export function getImageUrlList(data) {
	return data.map((info) => getImageURL(info));
}
