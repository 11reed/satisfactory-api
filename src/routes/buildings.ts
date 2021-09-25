import { Drash } from "https://deno.land/x/drash@v1.5.1/mod.ts";

import buildingsData from '../data/buildingsData.ts';

export default class AllResource extends Drash.Http.Resource {
  static paths = ["/v1/buildings"];
  public GET() {
    this.response.body = JSON.parse(JSON.stringify(buildingsData));
    return this.response;
  }
}