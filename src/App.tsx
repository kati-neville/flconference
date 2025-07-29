import logo from "./assets/logo.webp";
import {
	FaInstagram,
	FaTwitter,
	FaYoutube,
	FaTiktok,
	FaFacebook,
	FaPodcast,
	FaGooglePlay,
	FaApple,
} from "react-icons/fa";

const links = {
	"First Love Center": [
		{
			name: "Instagram",
			icon: <FaInstagram className="w-6 h-6" />,
			url: "https://www.instagram.com/firstlovecenter?igsh=bWxsMHE1eXE0dnEy",
		},
		{
			name: "Twitter",
			icon: <FaTwitter className="w-6 h-6" />,
			url: "https://x.com/FirstLoveCenter",
		},
		{
			name: "Facebook",
			icon: <FaFacebook className="w-6 h-6" />,
			url: "https://www.facebook.com/firstlovecenter",
		},
		{
			name: "YouTube",
			icon: <FaYoutube className="w-6 h-6" />,
			url: "https://www.youtube.com/@firstlovecenter",
		},
		{
			name: "TikTok",
			icon: <FaTiktok className="w-6 h-6" />,
			url: "https://www.tiktok.com/@firstlovecenter",
		},
	],
	"Bishop Dag": [
		{
			name: "Instagram",
			icon: <FaInstagram className="w-6 h-6" />,
			url: "https://www.instagram.com/daghmills",
		},
		{
			name: "Twitter",
			icon: <FaTwitter className="w-6 h-6" />,
			url: "https://x.com/EvangelistDag",
		},
		{
			name: "Facebook",
			icon: <FaFacebook className="w-6 h-6" />,
			url: "https://www.facebook.com/daghewardmills.org",
		},
		{
			name: "YouTube",
			icon: <FaYoutube className="w-6 h-6" />,
			url: "https://www.youtube.com/@DagHewardMillsvideos",
		},
		{
			name: "TikTok",
			icon: <FaTiktok className="w-6 h-6" />,
			url: "https://www.tiktok.com/@daghmills",
		},
		{
			name: "Podcast",
			icon: <FaPodcast className="w-6 h-6" />,
			url: "https://daghewardmillsfirstlove.podbean.com/",
		},
	],
	"Bishop Joshua": [
		{
			name: "Instagram",
			icon: <FaInstagram className="w-6 h-6" />,
			url: "https://www.instagram.com/themillsdude/",
		},
		{
			name: "Twitter",
			icon: <FaTwitter className="w-6 h-6" />,
			url: "https://x.com/themillsdude",
		},
		{
			name: "YouTube",
			icon: <FaYoutube className="w-6 h-6" />,
			url: "https://www.youtube.com/@MeetingGod_",
		},
		{
			name: "TikTok",
			icon: <FaTiktok className="w-6 h-6" />,
			url: "https://www.tiktok.com/@meetinggodclips",
		},
		{
			name: "Podcast",
			icon: <FaPodcast className="w-6 h-6" />,
			url: "https://firstlovecpodcast.podbean.com",
		},
	],
};

const appLinks = [
	{
		name: "Download on Android",
		icon: <FaGooglePlay className="w-6 h-6" />,
		url: "https://play.google.com/store/apps/details?id=io.bemasolution.dagsermons&hl=en",
	},
	{
		name: "Download on iOS",
		icon: <FaApple className="w-6 h-6" />,
		url: "https://apps.apple.com/gh/app/dag-sermons/id6502289149",
	},
];

function App() {
	const params = new URLSearchParams(window.location.search);

	// Get individual parameters
	const type = params.get("type"); // "John"

	return (
		<div className="min-h-screen w-screen flex flex-col items-center pb-8">
			<div className="w-fit mx-auto">
				<img src={logo} alt="logo" className="w-40" />
			</div>
			<div className="mb-4">
				<h1 className="text-2xl font-medium">HEARING & SEEING CAMPAIGN</h1>
			</div>

			{type ? (
				<div className="mt-12 text-center sm:space-y-12 space-y-6">
					<h2 className="text-xl font-semibold text-center">Mobile Apps</h2>
					<div className="flex flex-col sm:flex-row justify-center items-center gap-4">
						{appLinks.map(link => (
							<a
								key={link.name}
								href={link.url}
								target="_blank"
								rel="noopener noreferrer"
								className="flex items-center justify-start gap-3 p-4 border rounded-xl shadow hover:shadow-md transition">
								{link.icon}
								<span className="font-medium">{link.name}</span>
							</a>
						))}
					</div>
				</div>
			) : (
				<div className="max-w-lg md:w-full w-[90%] mx-auto space-y-12">
					{Object.entries(links).map(([group, groupLinks]) => (
						<div key={group}>
							<h2 className="text-xl font-semibold mb-4 text-left">{group}</h2>
							<div className="grid grid-cols-2 gap-4">
								{groupLinks.map(link => (
									<a
										key={link.name}
										href={link.url}
										target="_blank"
										rel="noopener noreferrer"
										className="flex items-center justify-start gap-3 p-4 border rounded-xl shadow hover:shadow-md transition">
										{link.icon}
										<span className="font-medium">{link.name}</span>
									</a>
								))}
							</div>
						</div>
					))}
				</div>
			)}
		</div>
	);
}

export default App;
