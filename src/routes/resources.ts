import { Drash } from "https://deno.land/x/drash@v1.5.1/mod.ts";

import resourcesData from '../data/resourcesData.ts';

export default class AllResource extends Drash.Http.Resource {
  static paths = ["/api/v1/resources"];
  public GET() {
    this.response.body = JSON.parse(JSON.stringify(resourcesData));
    return this.response;
  }
}