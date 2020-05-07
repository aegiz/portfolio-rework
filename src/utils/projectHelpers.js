/**
 * This function takes in a project'name and returns a new clean string
 * @param string projectType: the type of project we have to deal with
 * @param string sideProjectColor: the default color for Side project
 * @param string fullTimeColor: the default color for Full-time project
 * @param string freelanceColor: the default color for Freelance project
 * @param string defaultColor: the default color
 */

export function handleColorType(
	projectType,
	sideProjectColor = ({ theme }) => theme.colors.black,
	fullTimeColor = ({ theme }) => theme.colors.yellow.light,
	freelanceColor = ({ theme }) => theme.colors.yellow.main,
	defaultColor = ({ theme }) => theme.colors.white
) {
	const projectTypeClean = cleanProjectName(projectType);
	if (projectTypeClean === "sideproject") {
		return sideProjectColor;
	} else if (projectTypeClean === "full-timework") {
		return fullTimeColor;
	} else if (projectTypeClean === "freelancework") {
		return freelanceColor;
	} else {
		return defaultColor;
	}
}

/**
 * This function takes in a project'name and returns a new clean string
 * @param string the project text string.
 */

export function cleanProjectName(project) {
	return project ? project.toLowerCase().replace(/\s/g, "") : "";
}
