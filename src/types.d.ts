type TestType = "CLASSIC" | "SERVER_SIDE" | "MVT";

type Status = "DRAFT" | "ONLINE" | "PAUSED" | "STOPPED";

type Data = {
  sites: Site[];
  tests: Test[];
};

type Order = "asc" | "desc";

type Accessor = "name" | "status" | "type" | "button" | "url";

interface Column {
  label: string;
  accessor: Accessor;
}

interface Site {
  id: number;
  url: string;
}

interface Test {
  id: number;
  name: string;
  type: TestType;
  status: Status;
  siteId: number;
}

interface JoinedTest extends Test {
  url: string;
}
