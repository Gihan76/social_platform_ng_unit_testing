import { AppComponent } from "./app.component";


describe("AppComponent", () => {

  it("should have a defined title", () => {
    const comp = new AppComponent();
    expect(comp.title).toBeDefined();
  });

});