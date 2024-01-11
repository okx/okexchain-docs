# Sample Queries

- Query URL ：https://www.okx.com/okc/subgraph-hosted/name/<Subgraph_name>
- Query Playground：https://www.okx.com/okc/subgraph-hosted/name/<Subgraph_name>/graphql

Please replace `<Subgraph_name>` in the example with your own Subgraph name

## Example

### Specification definition of GraphQL language

```Shell
query [operationName]([variableName]: [variableType]) {
  [queryName]([argumentName]: [variableName]) {
    # "{ ... }" express a Selection-Set, we are querying fields from `queryName`.
    [field]
    [field]
  }
}
```

While the list of syntactic do's and don'ts is long, here are the essential rules to keep in mind when it comes to writing GraphQL queries:

- Each `queryName` must only be used once per operation.
- Each `field` must be used only once in a selection (we cannot query `id` twice under `token`)
- Some `field`s or queries (like `tokens`) return complex types that require a selection of sub-field. Not providing a selection when expected (or providing one when not expected - for example, on `id`) will raise an error. 
- Any variable assigned to an argument must match its type.
- In a given list of variables, each of them must be unique.
- All defined variables must be used.

Failing to follow the above rules will end with an error from the Graph API.

### The anatomy of a GraphQL query

Unlike REST API, a GraphQL API is built upon a Schema that defines which queries can be performed.

For example, a query to get a block using the `GetBlocks` query will look as follows:

```Shell
query GetBlocks($id: ID!) {
  blocks(id: $id) {
    id
    number
    timestamp
  }
}
```

It will return the following predictable JSON response ( *when passing the correct* *`$id `**variable value* ):

```Shell
{
    "data": {
        "blocks": [
            {
                "id": "...",
                "number": "...",
                "timestamp": "..."
            }
        ]
    }
}
```

#### GraphQL API

- When querying a collection, the `orderBy `parameter can be used to sort by specific properties. `orderDirection `can be used to specify the sort
- When querying a collection, you can use the `first `parameter to page from the beginning of the collection. The `skip `parameter can be used to skip entities and pagination.
- When querying a collection, you can use the `where `parameter to filter different properties

example:

```Shell
query GetBlocks {
  blocks(
    first: 10
    orderBy: id
    orderDirection: desc
    skip: 10
    where: {number_gt: "17007257"}
  ) {
    id
    number
    timestamp
  }
}
```

For more features (such as time-travel queries, fulltext search queries), please refer to https://thegraph.com/docs/zh/querying/graphql-api/

#### Combine multiple queries

Your application may need to query data for multiple entities, and you can send multiple queries in the same GraphQL request as follows:

```Shell
query GetInfo {
  blocks(
    first: 10
    orderBy: id
    orderDirection: desc
    where: {id: "0xffffc9887a687234b1076e3ccfb19d58b19746795ae13a5eea19286d6fc34f0b"}
  ) {
    id
    number
    timestamp
  }
  submits(first: 10, orderBy: id, orderDirection: asc) {
    id
    from
    amount
  }
}
```

### Graph Explorer

Using Graph Explorer will help you query data more easily

1. Click "Explorer" in the upper left corner to expand

![img](../../../img/Subgraph-Explorer.png)

2. Select the query entity and filter

![img](../../../img/Subgraph-Filter.png)

3. Click this button to get results

![img](../../../img/Subgraph-Query.png)


### more

Query from the application can refer to: https://thegraph.com/docs/zh/querying/querying-from-an-application/

