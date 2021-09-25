import { Drash } from "https://deno.land/x/drash@v1.5.1/mod.ts";

import itemsData from '../data/itemsData.ts';

export default class AllResource extends Drash.Http.Resource {
  static paths = ["/api/v1/items"];
  public GET() {
    this.response.body = JSON.parse(JSON.stringify(itemsData));
    return this.response;
  }
}