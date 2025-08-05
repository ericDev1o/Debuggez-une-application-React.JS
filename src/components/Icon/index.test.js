import { render, screen } from "@testing-library/react";
import md5 from "md5";

import Icon from ".";

describe("Icon tests", () => {
    describe("When an Icon is created with name twitch", () => {
        it("then it should contain this path hash value 327fbc38c8e878259c3ec35ef231517a", async () => {
            render(<Icon name="twitch" />)

            await expect(md5(screen.getByTestId("twitch").getAttribute('d'))).toEqual('327fbc38c8e878259c3ec35ef231517a')
        });
    });
    describe("When an Icon is created with name facebook", () => {
        it("then it should contain this path hash value bbea4c9e40773b969fdb6e406059f853", async () => {
            render(<Icon name="facebook" />)

            await expect(md5(screen.getByTestId("facebook").getAttribute('d'))).toEqual("bbea4c9e40773b969fdb6e406059f853")
        });
    });
    describe("When an Icon is created with name twitter", () => {
        it.skip("then it should contain this path hash value ...", async () => {
            render(<Icon name="twitter" />)

            await expect(md5(screen.getByTestId("X").getAttribute('d'))).toEqual(/* "to do" */)
        });
    });
    describe("When an Icon is created with name youtube", () => {
        it.skip("then it should contain this path hash value ...", async () => {
            render(<Icon name="youtube" />)

            await expect(md5(screen.getByTestId("youtube1").getAttribute('d'))).toEqual(/* "to do" */)
        });
        it.skip("then it should contain this path hash value ...", async () => {
            render(<Icon name="youtube" />)

            await expect(md5(screen.getByTestId("youtube2").getAttribute('d'))).toEqual(/* "to do" */)
        });
    });
    describe("When an Icon is created with name close", () => {
        it.skip("then it could contain this path hash value ...", async () => {
            render(<Icon name="close" />)

            await expect(md5(screen.getByTestId("close").getAttribute('d'))).toEqual(/* "to do" */)
        });
    });
})
