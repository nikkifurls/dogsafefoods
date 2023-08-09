<section class="search">
	<h2>Search</h2>
	<p>You can also search for foods that are <a href="./safe" title="Safe"><span class="icon icon-thumbsup" role="img" title="Safe">👍</span>&nbsp;safe</a>&nbsp;or&nbsp;<a href="./unsafe" title="Unsafe"><span class="icon icon-thumbsdown" role="img" title="Unsafe">👎</span>&nbsp;unsafe</a></p>
	<p class="bold small">Read&nbsp;the&nbsp;<a href="#tips" title="Tips">tips</a>&nbsp;below before sharing any food with&nbsp;dogs</p>
	<label for="search">
		<input id="search" type="search" autofocus="true" autocomplete="off" name="search" placeholder="enter food..." value="<?php echo (isset($project_data["pages"][$page]["url"]) && ($project_data["pages"][$page]["url"] !== "index")) ? $project_data["pages"][$page]["url"] : '' ?>" />
	</label>
	<div class="num-results"></div>
	<div class="results"></div>
</section>

<section class="tips" id="tips">
	<h2>Tips</h2>
	<strong>When sharing food with dogs, it is important to keep a few things in mind:</strong>
	<ul>
		<li><strong><b>Ask your veterinarian</b> before feeding your dog anything—especially if they take <b>medication</b> or have any <b>medical conditions (e.g. diabetes, allergies, etc.)</b>.</strong> Some medication can interact with foods, so don't take any chances!</li>
		<li><strong>Any foods dogs are eating for the first time should be <b>introduced in small quantities</b>.</strong> Monitor them after they eat it, and if they experience any negative symptoms, don't feed it to them again.</li>
		<li><strong>Any foods outside of your dog's normal diet should make up <b>less than 10% of their daily food intake</b>.</strong> For example, if your dog eats 5 cups of food per day, they shouldn't eat more than ½ cup of treats (e.g. ¼ cup of blueberries, and a couple of baby carrots). Any foods fed to dogs in large amounts can lead to digestive upset, so moderation is truly key.</li>
		<li><strong>Any foods shared with dogs should be cut into <b>bite-size pieces, with all choking hazards removed (e.g. pits, peels, seeds)</b>.</strong> These choking hazards can even become obstructed in your dogs gastrointestinal tract. Never share these things with dogs, even if they are perfectly normal for humans to eat.</li>
		<li><strong>Dogs shouldn't eat foods with <b>added salt, oils, sugar, seasonings, sauces, or any other variations</b>.</strong> These additions, while delicious, often contain ingredients that are harmful, if not <strong>toxic</strong> to dogs, such as garlic, onions, or even xylitol. Dogs should not eat foods that were prepared with these ingredients, either.</li>
		<li id="highfat"><strong>Dogs shouldn't eat <b>high fat</b> foods, even if they are generally considered healthy for us.</strong> Dogs aren't built to eat large amounts of fat and these foods can cause dogs to get gastrointestinal upset and even pancreatitis, an inflammation of the pancreas which can range from mild to severe. Symptoms are usually vomiting, lethargy, diarrhea, and a loss of appetite. This can be an emergency situation and <strong>requires immediate veterinary treatment</strong>.</li>
		<li id="processed"><strong>Dogs shouldn't eat <b>processed foods</b> such as baked foods, boxed snacks, fast food, etc.</strong> Aside from being unhealthy and high in fat, they often conceal ingredients that may be troublesome or even <strong>toxic</strong> for dogs, such as a sweetener called xylitol. Be sure to thoroughly <strong>read the ingredients</strong> of any processed foods you share with your dog, and if you can't determine the safety level of each ingredient, do not share it with your dog.</li>
		<li id="canned"><strong>Dogs shouldn't eat <b>canned</b> versions of foods (e.g. fruits, vegetables, etc.), due to their added preservatives</strong> including excess salt and sugar, which can be harmful to dogs (and humans!). Choose fresh or even frozen versions instead.</li>
		<li id="dcm"><strong>Recent research suggests that several foods, such as <b>peas, legumes, and potatoes</b>, while not toxic, may not be appropriate for dogs to consume regularly, due to their correlation with the development of a heart condition called canine dilated cardiomyopathy (DCM)</strong>. <a href="https://www.fda.gov/animal-veterinary/outbreaks-and-advisories/fda-investigation-potential-link-between-certain-diets-and-canine-dilated-cardiomyopathy" target="_blank" rel="noopener">Read more about the DCM warning at FDA.gov</a>.</li>
	</ul>
</section>