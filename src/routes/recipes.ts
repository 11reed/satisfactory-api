import { Drash } from "https://deno.land/x/drash@v1.5.1/mod.ts";

import recipesData from '../data/recipesData.ts';

export default class AllResource extends Drash.Http.Resource {
  static paths = ["/v1/recipes"];
  public GET() {
    this.response.body = JSON.parse(JSON.stringify(recipesData));
    return this.response;
  }
}