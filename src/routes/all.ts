import { Drash } from "https://deno.land/x/drash@v1.5.1/mod.ts";

import allData from '../data/allData.ts';

export default class AllResource extends Drash.Http.Resource {
  static paths = ["/v1/all"];
  public GET() {
    this.response.body = JSON.parse(JSON.stringify(allData));
    return this.response;
  }
}