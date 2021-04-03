import { Plugin } from 'ckeditor5/src/core';

export default class EmojiNature extends Plugin {
	/**
	 * @inheritDoc
	 */
	static get pluginName() {
		return 'EmojiNature';
	}

	/**
	 * @inheritDoc
	 */
	init() {
		const editor = this.editor;
		const t = editor.t;

		editor.plugins.get( 'Emoji' ).addItems( '🐻 ' + t('Animals & Nature'),
            [
                { title: 'See-No-Evil Monkey', character: '🙈' }, { title: 'Hear-No-Evil Monkey', character: '🙉' }, { title: 'Speak-No-Evil Monkey', character: '🙊' }, { title: 'Collision', character: '💥' }, { title: 'Dizzy', character: '💫' }, { title: 'Sweat Droplets', character: '💦' }, { title: 'Dashing Away', character: '💨' }, { title: 'Monkey Face', character: '🐵' }, { title: 'Monkey', character: '🐒' }, { title: 'Gorilla', character: '🦍' }, { title: 'Orangutan', character: '🦧' }, { title: 'Dog Face', character: '🐶' }, { title: 'Dog', character: '🐕' }, { title: 'Guide Dog', character: '🦮' }, { title: 'Service Dog', character: '🐕‍🦺' }, { title: 'Poodle', character: '🐩' }, { title: 'Wolf', character: '🐺' }, { title: 'Fox', character: '🦊' }, { title: 'Raccoon', character: '🦝' }, { title: 'Cat Face', character: '🐱' }, { title: 'Cat', character: '🐈' }, { title: 'Black Cat', character: '🐈‍⬛' }, { title: 'Lion', character: '🦁' }, { title: 'Tiger Face', character: '🐯' }, { title: 'Tiger', character: '🐅' }, { title: 'Leopard', character: '🐆' }, { title: 'Horse Face', character: '🐴' }, { title: 'Horse', character: '🐎' }, { title: 'Unicorn', character: '🦄' }, { title: 'Zebra', character: '🦓' }, { title: 'Deer', character: '🦌' }, { title: 'Bison', character: '🦬' }, { title: 'Cow Face', character: '🐮' }, { title: 'Ox', character: '🐂' }, { title: 'Water Buffalo', character: '🐃' }, { title: 'Cow', character: '🐄' }, { title: 'Pig Face', character: '🐷' }, { title: 'Pig', character: '🐖' }, { title: 'Boar', character: '🐗' }, { title: 'Pig Nose', character: '🐽' }, { title: 'Ram', character: '🐏' }, { title: 'Ewe', character: '🐑' }, { title: 'Goat', character: '🐐' }, { title: 'Camel', character: '🐪' }, { title: 'Two-Hump Camel', character: '🐫' }, { title: 'Llama', character: '🦙' }, { title: 'Giraffe', character: '🦒' }, { title: 'Elephant', character: '🐘' }, { title: 'Mammoth', character: '🦣' }, { title: 'Rhinoceros', character: '🦏' }, { title: 'Hippopotamus', character: '🦛' }, { title: 'Mouse Face', character: '🐭' }, { title: 'Mouse', character: '🐁' }, { title: 'Rat', character: '🐀' }, { title: 'Hamster', character: '🐹' }, { title: 'Rabbit Face', character: '🐰' }, { title: 'Rabbit', character: '🐇' }, { title: 'Chipmunk', character: '🐿️' }, { title: 'Beaver', character: '🦫' }, { title: 'Hedgehog', character: '🦔' }, { title: 'Bat', character: '🦇' }, { title: 'Bear', character: '🐻' }, { title: 'Polar Bear', character: '🐻‍❄️' }, { title: 'Koala', character: '🐨' }, { title: 'Panda', character: '🐼' }, { title: 'Sloth', character: '🦥' }, { title: 'Otter', character: '🦦' }, { title: 'Skunk', character: '🦨' }, { title: 'Kangaroo', character: '🦘' }, { title: 'Badger', character: '🦡' }, { title: 'Paw Prints', character: '🐾' }, { title: 'Turkey', character: '🦃' }, { title: 'Chicken', character: '🐔' }, { title: 'Rooster', character: '🐓' }, { title: 'Hatching Chick', character: '🐣' }, { title: 'Baby Chick', character: '🐤' }, { title: 'Front-Facing Baby Chick', character: '🐥' }, { title: 'Bird', character: '🐦' }, { title: 'Penguin', character: '🐧' }, { title: 'Dove', character: '🕊️' }, { title: 'Eagle', character: '🦅' }, { title: 'Duck', character: '🦆' }, { title: 'Swan', character: '🦢' }, { title: 'Owl', character: '🦉' }, { title: 'Dodo', character: '🦤' }, { title: 'Feather', character: '🪶' }, { title: 'Flamingo', character: '🦩' }, { title: 'Peacock', character: '🦚' }, { title: 'Parrot', character: '🦜' }, { title: 'Frog', character: '🐸' }, { title: 'Crocodile', character: '🐊' }, { title: 'Turtle', character: '🐢' }, { title: 'Lizard', character: '🦎' }, { title: 'Snake', character: '🐍' }, { title: 'Dragon Face', character: '🐲' }, { title: 'Dragon', character: '🐉' }, { title: 'Sauropod', character: '🦕' }, { title: 'T-Rex', character: '🦖' }, { title: 'Spouting Whale', character: '🐳' }, { title: 'Whale', character: '🐋' }, { title: 'Dolphin', character: '🐬' }, { title: 'Seal', character: '🦭' }, { title: 'Fish', character: '🐟' }, { title: 'Tropical Fish', character: '🐠' }, { title: 'Blowfish', character: '🐡' }, { title: 'Shark', character: '🦈' }, { title: 'Octopus', character: '🐙' }, { title: 'Spiral Shell', character: '🐚' }, { title: 'Snail', character: '🐌' }, { title: 'Butterfly', character: '🦋' }, { title: 'Bug', character: '🐛' }, { title: 'Ant', character: '🐜' }, { title: 'Honeybee', character: '🐝' }, { title: 'Beetle', character: '🪲' }, { title: 'Lady Beetle', character: '🐞' }, { title: 'Cricket', character: '🦗' }, { title: 'Cockroach', character: '🪳' }, { title: 'Spider', character: '🕷️' }, { title: 'Spider Web', character: '🕸️' }, { title: 'Scorpion', character: '🦂' }, { title: 'Mosquito', character: '🦟' }, { title: 'Fly', character: '🪰' }, { title: 'Worm', character: '🪱' }, { title: 'Microbe', character: '🦠' }, { title: 'Bouquet', character: '💐' }, { title: 'Cherry Blossom', character: '🌸' }, { title: 'White Flower', character: '💮' }, { title: 'Rosette', character: '🏵️' }, { title: 'Rose', character: '🌹' }, { title: 'Wilted Flower', character: '🥀' }, { title: 'Hibiscus', character: '🌺' }, { title: 'Sunflower', character: '🌻' }, { title: 'Blossom', character: '🌼' }, { title: 'Tulip', character: '🌷' }, { title: 'Seedling', character: '🌱' }, { title: 'Potted Plant', character: '🪴' }, { title: 'Evergreen Tree', character: '🌲' }, { title: 'Deciduous Tree', character: '🌳' }, { title: 'Palm Tree', character: '🌴' }, { title: 'Cactus', character: '🌵' }, { title: 'Sheaf of Rice', character: '🌾' }, { title: 'Herb', character: '🌿' }, { title: 'Shamrock', character: '☘️' }, { title: 'Four Leaf Clover', character: '🍀' }, { title: 'Maple Leaf', character: '🍁' }, { title: 'Fallen Leaf', character: '🍂' }, { title: 'Leaf Fluttering in Wind', character: '🍃' }, { title: 'Mushroom', character: '🍄' }, { title: 'Chestnut', character: '🌰' }, { title: 'Crab', character: '🦀' }, { title: 'Lobster', character: '🦞' }, { title: 'Shrimp', character: '🦐' }, { title: 'Squid', character: '🦑' }, { title: 'Globe Showing Europe-Africa', character: '🌍' }, { title: 'Globe Showing Americas', character: '🌎' }, { title: 'Globe Showing Asia-Australia', character: '🌏' }, { title: 'Globe with Meridians', character: '🌐' }, { title: 'Rock', character: '🪨' }, { title: 'New Moon', character: '🌑' }, { title: 'Waxing Crescent Moon', character: '🌒' }, { title: 'Waxing Gibbous Moon', character: '🌔' }, { title: 'Full Moon', character: '🌕' }, { title: 'Waning Gibbous Moon', character: '🌖' }, { title: 'Last Quarter Moon', character: '🌗' }, { title: 'Waning Crescent Moon', character: '🌘' }, { title: 'Crescent Moon', character: '🌙' }, { title: 'New Moon Face', character: '🌚' }, { title: 'First Quarter Moon Face', character: '🌛' }, { title: 'Last Quarter Moon Face', character: '🌜' }, { title: 'Sun', character: '☀️' }, { title: 'Full Moon Face', character: '🌝' }, { title: 'Sun with Face', character: '🌞' }, { title: 'Star', character: '⭐' }, { title: 'Glowing Star', character: '🌟' }, { title: 'Shooting Star', character: '🌠' }, { title: 'Cloud', character: '☁️' }, { title: 'Sun Behind Cloud', character: '⛅' }, { title: 'Cloud with Lightning and Rain', character: '⛈️' }, { title: 'Sun Behind Small Cloud', character: '🌤️' }, { title: 'Sun Behind Large Cloud', character: '🌥️' }, { title: 'Sun Behind Rain Cloud', character: '🌦️' }, { title: 'Cloud with Rain', character: '🌧️' }, { title: 'Cloud with Snow', character: '🌨️' }, { title: 'Cloud with Lightning', character: '🌩️' }, { title: 'Tornado', character: '🌪️' }, { title: 'Fog', character: '🌫️' }, { title: 'Wind Face', character: '🌬️' }, { title: 'Rainbow', character: '🌈' }, { title: 'Umbrella', character: '☂️' }, { title: 'Umbrella with Rain Drops', character: '☔' }, { title: 'High Voltage', character: '⚡' }, { title: 'Snowflake', character: '❄️' }, { title: 'Snowman', character: '☃️' }, { title: 'Snowman Without Snow', character: '⛄' }, { title: 'Comet', character: '☄️' }, { title: 'Fire', character: '🔥' }, { title: 'Droplet', character: '💧' }, { title: 'Water Wave', character: '🌊' }, { title: 'Christmas Tree', character: '🎄' }, { title: 'Sparkles', character: '✨' }, { title: 'Tanabata Tree', character: '🎋' }, { title: 'Pine Decoration', character: '🎍' },
            ]
        );
	}
}