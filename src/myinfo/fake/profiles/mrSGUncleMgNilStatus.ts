import * as _ from "lodash";
import { MyinfoMerdekaGenerationMessageCode } from "../../domain";
import { FakeProfile, ProfileArchetype } from "./fake-profile";
import { mrSGDaddyPerfect } from "./mrSGDaddyPerfect";

const id = "S8399420G";
const name = ProfileArchetype.MR_SG_UNCLE_MG_NIL_STATUS;

export const mrSGUncleMgNilStatus: FakeProfile = {
	id,
	name,
	generate: (profileName) => {
		profileName = _.isEmpty(profileName) ? name : profileName;

		const profile = mrSGDaddyPerfect.generate(profileName);
		profile.merdekagen.message.code = MyinfoMerdekaGenerationMessageCode.NIL_STATUS;
		profile.merdekagen.eligibility.value = false;
		profile.dob = {
			lastupdated: "2020-01-01",
			source: "1",
			classification: "C",
			value: `1959-01-01`,
			unavailable: false,
		};
		return profile;
	},
};
