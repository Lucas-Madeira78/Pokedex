import { fireEvent, render, screen, waitFor, within } from "@testing-library/react";
import "@testing-library/jest-dom"
import PokemonList from "./PokemonList";

jest.mock("../../services/api", () => ({
    getPokemonList: jest.fn(),
    getPokemon: jest.fn(),
}));

import { getPokemonList, getPokemon } from "../../services/api";
import { MemoryRouter } from "react-router-dom";

beforeEach(() => {
    getPokemonList.mockResolvedValue(Array(10).fill("url-fake"));

    getPokemon.mockResolvedValue(
        Array.from({ length:10 }, (_, i) => ({ 
            name: `pokemon-${i}`,
            sprites: {
                front_default: "url-fake"
            }
        }))
    );
});

it("should render 10 pokemons", async () => {
    render(
        <MemoryRouter>
            <PokemonList />
        </MemoryRouter>
    );

    const divs = await screen.findAllByTestId("pokemon-card");

    expect(divs).toHaveLength(10)
});

it("should load more 10 pokemons", async () => {
    render(
        <MemoryRouter>
            <PokemonList />
        </MemoryRouter>
    );

    getPokemonList.mockResolvedValue(Array(20).fill("url-fake"));

    getPokemon.mockResolvedValue(
        Array.from({ length:20 }, (_, i) => ({ 
            name: `pokemon-${i}`,
            sprites: {
                front_default: "url-fake"
            }
        }))
    );

    const loadMoreBtn = screen.getByRole("button");
    fireEvent.click(loadMoreBtn);

    await waitFor(async () => {
        const divs = await screen.findAllByTestId("pokemon-card");
        expect(divs).toHaveLength(20)
    });
});