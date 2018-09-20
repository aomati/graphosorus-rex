import { GraphEdge, GcKey, GraphVertice, Lang } from "./graphosorus-rex";

describe("model validation", () => {
  describe("gckey", () => {
    it("should see a valid GcKey", () => {
      let key: GcKey = {
        id: 1,
        lang: "en",
        properties: [
          { key: "label", value: "the label" },
          { key: "description", value: "the description" }
        ],
        parent: { id: 0, i18n: [] }
      };
      expect(key.id).toEqual(1);
      expect(key.lang).toEqual(Lang.EN);
      expect(Object.keys(key.properties).length).toEqual(2);
    });
  });
});
