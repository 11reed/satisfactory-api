/*
import { gql } from 'https://deno.land/x/graphql_tag@0.0.1/mod.ts';
import { Request } from 'https://deno.land/x/request@1.3.2/mod.ts';

const query = gql`
  {
      belts {
          name
          image
      }
      buildings {
          key_name
          image
      }
  }
`

const result = await Request.get('http://localhost:8080/api/v1/all', query);
console.log(result);
*/