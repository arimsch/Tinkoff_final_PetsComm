import { Inject, Injectable } from "@angular/core";
import { NewsApiService } from "./news-api.service";
import { INewsApiService, INewsApiServiceToken } from "./interfaces/news-api-service";
import { News } from "./models/news";

@Injectable()
export class NewsService {
    constructor(
        @Inject(INewsApiServiceToken)
    private readonly newsApiService: INewsApiService) {}

    public addNews(news: News): void {
        console.log(news)
        this.newsApiService.addNews(news).subscribe()
    }
}