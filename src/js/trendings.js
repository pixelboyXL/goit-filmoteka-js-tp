import { getTrending } from './api';
import { renderMarkup } from './renderMarkup';
import { saveLs } from './storage';

getTrending(1).then((r) => {
	renderMarkup(r),
	saveLs("moviesData", r.results);
});
