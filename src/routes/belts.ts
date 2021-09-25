import { Drash } from "https://deno.land/x/drash@v1.5.1/mod.ts";

import beltsData from '../data/beltsData.ts';

export default class BeltsResource extends Drash.Http.Resource {
  static paths = ["/api/v1/belts"];
  public GET() {
    this.response.body = JSON.parse(JSON.stringify(beltsData));
    return this.response;
  }
}