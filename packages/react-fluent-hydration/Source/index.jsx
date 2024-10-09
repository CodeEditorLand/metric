import {
	Button,
	FluentProvider,
	teamsLightTheme,
} from "@fluentui/react-components";
import React from "react";
import { hydrateRoot } from "react-dom/client";

function ExampleApp() {
	return (
		<FluentProvider theme={teamsLightTheme}>
			<Button>Fluent React</Button>
		</FluentProvider>
	);
}

const container = document.querySelector("example-app");
hydrateRoot(container, <ExampleApp />);
