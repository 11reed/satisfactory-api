import { Drash } from "https://deno.land/x/drash@v1.5.1/mod.ts";

import minersData from '../data/minersData.ts';

export default class AllResource extends Drash.Http.Resource {
  static paths = ["/api/v1/miners"];

  public GET() {
    this.response.body = JSON.parse(JSON.stringify(minersData));

    return this.response;
  }
}